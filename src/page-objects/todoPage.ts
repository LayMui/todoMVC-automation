import { Question } from '@serenity-js/core'
import { Element } from 'webdriverio'
import { by, Target, Text } from '@serenity-js/webdriverio'
import { includes } from '@serenity-js/assertions'

export const todoPage = {
  inputItem: () => Target.the('input new item').located(by.css('.new-todo')),

  todoList: (
    item: string
  ): Question<Promise<Element<'async'>>> => {
    return Target.all('todo')
      .located(by.css('.view'))
      .where(Text, includes(item))
      .first()
  },
}



