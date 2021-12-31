import { Duration, Task } from '@serenity-js/core'
import { isVisible, Wait } from '@serenity-js/webdriverio'
import { todoPage } from '../page-objects/todoPage'

export const VerifyItem = {
  intheList: (item: string) =>
    Task.where(
      `#actor verify the todo item is added to the list`,
      Wait.upTo(Duration.ofMilliseconds(80000)).until(
        todoPage.todoList(item),
        isVisible()
      )
    ),
}
