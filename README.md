| Name   |  Verb  | Address            | Handler                    |
| ------ | :----: | ------------------ | -------------------------- |
|        |        | **Catalogue**      |
| Enum   |  GET   | api/catalogue      | CatalogueController.index  |
| Read   |  GET   | api/catalogue/{id} | CatalogueController.read   |
| Create |  POST  | api/catalogue      | CatalogueController.create |
| Update |  PUT   | api/catalogue/{id} | CatalogueController.update |
| Delete | DELETE | api/catalogue/{id} | CatalogueController.delete |
|        |        | **Category**       |
| Enum   |  GET   | api/category       | CategoryController.index   |
| Read   |  GET   | api/category/{id}  | CategoryController.read    |
| Create |  POST  | api/category       | CategoryController.create  |
| Update |  PUT   | api/category/{id}  | CategoryController.update  |
| Delete | DELETE | api/category/{id}  | CategoryController.delete  |
