import * as assert from 'node:assert';
import {
  toCamelCase,
  toConstantCase,
  toKebabCase,
  toLowerCase,
  toPascalCase,
  toScreamingCase,
  toSnakeCase,
  toTitleCase,
  toUpperCase,
} from '../utils';

suite('Utils Test Suite', () => {
  test('toCamelCase', () => {
    assert.strictEqual(toCamelCase('helloWorld'), 'helloWorld');
    assert.strictEqual(toCamelCase('HELLO_WORLD'), 'helloWorld');
    assert.strictEqual(toCamelCase('hello-world'), 'helloWorld');
  });

  test('toKebabCase', () => {
    assert.strictEqual(toKebabCase('hello_world'), 'hello-world');
    assert.strictEqual(toKebabCase('HELLO_WORLD'), 'hello-world');
    assert.strictEqual(toKebabCase('helloWorld'), 'hello-world');
  });

  test('toLowerCase', () => {
    assert.strictEqual(toLowerCase('HELLO_WORLD'), 'hello_world');
    assert.strictEqual(toLowerCase('HelloWorld'), 'helloworld');
  });

  test('toPascalCase', () => {
    assert.strictEqual(toPascalCase('helloWorld'), 'HelloWorld');
    assert.strictEqual(toPascalCase('HELLO_WORLD'), 'HelloWorld');
    assert.strictEqual(toPascalCase('hello-world'), 'HelloWorld');
  });

  test('toScreamingCase', () => {
    assert.strictEqual(toScreamingCase('helloWorld'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('hello-world'), 'HELLO_WORLD');
    assert.strictEqual(toScreamingCase('HelloWorld'), 'HELLO_WORLD');
  });

  test('toConstantCase', () => {
    assert.strictEqual(toConstantCase('helloWorld'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('hello-world'), 'HELLO_WORLD');
    assert.strictEqual(toConstantCase('HelloWorld'), 'HELLO_WORLD');
  });

  test('toSnakeCase', () => {
    assert.strictEqual(toSnakeCase('helloWorld'), 'hello_world');
    assert.strictEqual(toSnakeCase('hello_world'), 'hello_world');
    assert.strictEqual(toSnakeCase('hello-world'), 'hello_world');
    assert.strictEqual(toSnakeCase('HelloWorld'), 'hello_world');
  });

  test('toTitleCase', () => {
    assert.strictEqual(toTitleCase('helloWorld'), 'HelloWorld');
    assert.strictEqual(toTitleCase('hello_world'), 'HelloWorld');
    assert.strictEqual(toTitleCase('hello-world'), 'HelloWorld');
    assert.strictEqual(toTitleCase('HelloWorld'), 'HelloWorld');
  });

  test('toUpperCase', () => {
    assert.strictEqual(toUpperCase('hello_world'), 'HELLO_WORLD');
    assert.strictEqual(toUpperCase('HelloWorld'), 'HELLOWORLD');
  });
});
