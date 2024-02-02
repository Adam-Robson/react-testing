# React Testing - Shopping List

## Demo

[Whisker Watcher with tests](https://github.com/alchemy-adv-fullstack/adv-fullstack-react-testing-demo)

## Getting Started

Use [this
template](https://github.com/alchemy-adv-fullstack/adv-fullstack-react-testing-template)
to get started.

Copy your `.env.example` to `.env`. You can do this using `cp .env.example .env`
from your terminal. Do not move or delete `.env.example`.

You will need to setup two Supabase tables, listed below. These tables will need
RLS (Row Level Security) disabled.

`anon-shopping-lists` with the following columns:

| name         | data type                | format        | nullable |
|--------------|--------------------------|---------------|----------|
| `id`         | bigint                   | `int8`        | no       |
| `created_at` | timestamp with time zone | `timestamptz` | no       |
| `name`       | character varying        | `varchar`     | no       |
|              |                          |               |          |

And then `anon-shopping-list-items` with the following columns:

| name                       | data type                | format        | nullable |
|----------------------------|--------------------------|---------------|----------|
| `id`                       | bigint                   | `int8`        | no       |
| `created_at`               | timestamp with time zone | `timestamptz` | no       |
| `item_name`                | character varying        | `varchar`     | no       |
| `quantity`                 | bigint                   | `int8`        | no       |
| `shopping_list_id`[^1][^2] | bigint                   | `int8`        | yes      |

[^1]: Note that `shopping_list_id` is nullable. This is to keep it compatible with
prior assignments that might also use this table.

[^2]: Additionally, `shopping_list_id` needs to be setup as a foreign key to
`anon-shopping-lists` by the `id` field.

## Description

In this assignment, there are three components that require tests:

1. `ShoppingLists`
2. `ShoppingList`
3. `ShoppingListForm`

New components will need to be written along with their tests:

1. `ShoppingListItem`
2. `ShoppingListItemForm`

The `ConfirmationButton` has tests that demonstrate its usage and prove its
functionality. This is useful for both of the `*Form` components, but not
required.

## Acceptance Criteria

1. Your pull request must be passing CI.
2. Tests should exercise each property passed to a component.
3. Use `data-testid` to identify elements.
4. Each test should have a single or minimal assertions, but never zero.
5. Each test should clearly state what it intends to verify.

## Rubric

| Task                                                                  | Points |
|-----------------------------------------------------------------------|--------|
| `ShoppingLists` tests implemented                                     | 2      |
| `ShoppingList` tests implemented                                      | 3      |
| `ShoppingListForm` tests implemented                                  | 3      |
| `ShoppingListItem` component implemented                              | 4      |
| `ShoppingListItem` tests implemented                                  | 4      |
| `ShoppingListItemForm` component implemented                          | 4      |
| `ShoppingListItemForm` tests implemented                              | 3      |
| Stretch: Use `ConfirmationButton` to implement `ShoppingListItemForm` | 2      |
| Stretch: Add and test delete functionality for `ShoppingLists`        | 5      |
