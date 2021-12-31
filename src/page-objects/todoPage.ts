import { by, Target } from '@serenity-js/webdriverio'

export const todoPage = {
  inputItem: () =>
    Target.the('input new item').located(
      by.css('.new-todo')
    ),
}



