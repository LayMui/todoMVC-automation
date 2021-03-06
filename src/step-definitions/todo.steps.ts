import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor, actorInTheSpotlight, Log, Note, Question, TakeNote } from '@serenity-js/core'
import { Navigate } from '@serenity-js/webdriverio'
import { SignIn } from '../tasks/signIn'
import { UseEmail } from '../tasks/UseEmail'
import { VerifyAccount } from '../tasks/VerifyAccount'
import { AddItem, FillUp } from '../tasks/AddItem'
import { registrationPage } from '../page-objects/registrationPage'
import { Select } from '@serenity-js/web'
import { VerifyItem } from '../tasks/VerifyItem'


require('dotenv').config()

Given(
  '{actor} is at the todoMVC site',
  async (actor: Actor) =>
    await actor.attemptsTo(
      Navigate.to(process.env.TODOMVC_BASE_URL),
      
    )
)

When(
  '{pronoun} add the item to be done',
  async (actor: Actor, table: DataTable) => {
    const item1 = table.hashes()[0].item
    const item2 = table.hashes()[1].item
    await actor.attemptsTo(
      TakeNote.of(
        Question.about<string>(`item1`, (actor) => {
          return item1
        })
      ).as('item1'),
      TakeNote.of(
        Question.about<string>(`item2`, (actor) => {
          return item2
        })
      ).as('item2'),

      AddItem.toList(item1),
      AddItem.toList(item2),
    )
  }
)

Then('{pronoun} saw the item added', async (actor: Actor) => {
  const item1 = await Note.of('item1').answeredBy(actor)
  const item2 = await Note.of('item2').answeredBy(actor)
  await actor.attemptsTo(
    VerifyItem.intheList(`${item1}`),
    VerifyItem.intheList(`${item2}`)
  )
})
