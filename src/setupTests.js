// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill ReadableStream for Node 16 test environments
if (typeof globalThis.ReadableStream === 'undefined') {
  try {
    const { ReadableStream } = require('stream/web');
    globalThis.ReadableStream = ReadableStream;
  } catch (e) {}
}

// Polyfill window.matchMedia for react-slick
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    };
  };

// Mock window.scroll and window.scrollTo for jsdom
window.scroll = window.scroll || function () {};
window.scrollTo = window.scrollTo || function () {};

