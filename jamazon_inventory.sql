CREATE SCHEMA `products_db` ;


CREATE TABLE `products_db`.`jamazon_inventory` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NULL,
  `department_name` VARCHAR(45) NULL,
  `price` DECIMAL(12,2) NULL,
  `stock_quantity` INT NULL,
  PRIMARY KEY (`item_id`));
  

USE products_db;

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (1,'Neoprene Cement','Industrial & Scientific',11.95,1000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (2,'Raspberry Pi','Computers',34.95,9000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (3,'XFX Radeon RX Vega 64','Computers',899.99,100);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (4,'Intel Pentium G3258','Computers',59.99,3000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (5,'Kicking Horse Coffee','Food & Beverage',10.44,1000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (6,'Everyday Value Sourdough Bread','Food & Beverage',2.99,30000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (7,'Goldengulf Diving Torch','Outdoor Recreation',32.50,600);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (8,'Cressi F1 Scuba Mask','Outdoor Recreation',24.99,1000);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (9,'Athletico Scuba Diving Bag','Outdoor Recreation',29.99,200);

INSERT INTO jamazon_inventory (item_id,product_name,department_name,price,stock_quantity) VALUES (10,'Scuba Mesh Wire Bag','Outdoor Recreation',1.99,3000);
