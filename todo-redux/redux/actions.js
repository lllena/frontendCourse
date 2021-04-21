import {  EXECUTE, COMPLETED, ALL } from './types';

export function execute() {
  return {
    type: EXECUTE,
  };
}
export function completed() {
  return {
    type: COMPLETED,
  };
}

export function all() {
  return {
    type: ALL,
  };
}

