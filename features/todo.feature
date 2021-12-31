
Feature: Todo

  In order to remember what need to be done for the day
  As a homemaker Alice
  Alice wants to list out the list of things 

  Background:
    Given Alice is at the todoMVC site
@test
  Scenario: Able to add list of things to do
    When she add the item to be done
    | item             |
    | pack lunch       |
    | shop for iphone  |
    Then she is the item added
  

  