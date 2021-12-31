import { Duration, Task } from '@serenity-js/core'
import { Clear, Enter, isVisible, Key, Press, Wait} from '@serenity-js/webdriverio'
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
      Enter.theValue(item).into(todoPage.inputItem()),
      Press.the(Key.Enter).in(todoPage.inputItem())
    ),
}
