# ngx-dynamic-order

This is an Angular pipe called `ngxDynamicOrder` that can sort an array of objects by a property of the object dynamically at runtime. It allows sorting by single or multiple properties, case sensitivity, and custom comparator functions.

## Installation
To install this library, run:
```
    npm i ngx-dynamic-order
```

## Usage

1. Import the `NgxDynamicOrder` class from the pipe file:

    ```javascript
    import { NgxDynamicOrder } from './ngx-dynamic-order.pipe';
    ```

2. Add the `NgxDynamicOrder` to the `declarations` array of the module in which you want to use the pipe:

    ```javascript
    @NgModule({
        declarations: [NgxDynamicOrder],
        // ...
    })
    export class AppModule { }
    ```

3. Use the `ngxDynamicOrder` pipe in your component's template:

    ```html
    <ul>
        <li *ngFor="let item of items | ngxDynamicOrder: expression: reverse: isCaseInsensitive: comparator">{{item.name}}</li>
    </ul>
    ```

### Parameters

- `expression: string | string[]`: The property or properties of the objects to sort by. It can be a single string, or an array of strings if sorting by multiple properties. You can use dot notation to access nested properties of objects.
- `reverse?: boolean`: Set to `true` to sort the array in reverse order. Defaults to `false`.
- `isCaseInsensitive?: boolean`: Set to `true` to sort the array ignoring the case of strings. Defaults to `false`.
- `comparator?: Function`: A custom comparator function to use for sorting. It takes two arguments and should return a number less than 0, 0, or a number greater than 0 depending on the desired sort order.

## Methods

The `NgxDynamicOrder` class also provides several utility methods that can be used independently of the pipe:

- `isString(value: any): boolean`: Returns true if the value is a string, false otherwise.
- `caseInsensitiveSort(a: any, b: any)`: Compares two values case-insensitively.
- `defaultCompare(a: any, b: any)`: The default comparison function used for sorting. It handles null, undefined, and Date objects correctly.
- `parseExpression(expression: string): string[]`: Parses a string expression into an array of property names.
- `getValue(object: any, expression: string[]): any`: Retrieves a value from an object using a property expression.
- `setValue(object: any, value: any, expression: string[])`: Sets a value on an object using a property expression.

## Example

```javascript
const items = [
    { name: 'John', age: 30, country: { code: 'us', name: 'United States' } },
    { name: 'Alice', age: 25, country: { code: 'ca', name: 'Canada' } },
    { name: 'Bob', age: 35, country: { code: 'gb', name: 'United Kingdom' } }
];

const pipe = new NgxDynamicOrder();

// Sort by name
const sortedByName = pipe.transform(items, 'name');

// Sort by country code, then by age
const sortedByCountryAndAge = pipe.transform(items, ['country.code', 'age']);

// Sort by name in reverse order
const sortedByNameReversed = pipe.transform(items, 'name', true);

// Sort ignoring case
const sortedByNameIgnoreCase = pipe.transform(items, 'name', false, true);

