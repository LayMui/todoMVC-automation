import { Duration, Log, Task } from '@serenity-js/core'
import { Clear, Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio'
import { todoPage } from '../page-objects/todoPage'

export const AddItem = {
  toList: (item: string) =>
    Task.where(
      `#actor want add new item todo list`,
      Wait.upTo(Duration.ofMilliseconds(80000)).until(
        todoPage.inputItem(),
        isVisible()
      ),
      Clear.theValueOf(todoPage.inputItem()),
      Enter.theValue(item).into(todoPage.inputItem())
    ),
}
