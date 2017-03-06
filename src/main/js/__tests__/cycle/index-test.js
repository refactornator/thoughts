import assert from 'assert';
import xs from 'xstream';

import { assertSourcesSinks } from '../../test-helpers';
import * as ActionTypes from '../../ActionTypes';
import * as actions from '../../actions';

import { fetchThoughts, createThought, forgetThought } from '../../cycle';

describe('Cycles', () => {
  describe('fetchThoughts', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const actionSource = {
        a: actions.requestThoughts()
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts?sort=creationTime,desc',
          category: 'thoughts'
        }
      };

      // Asserts that the sources, trigger the provided sinks,
      // when executing the fetchReposByUser function
      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        fetchThoughts,
        done
      );
    });
  });

  describe('createThought', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const thought = {
        category: 'work',
        text: 'Original thought.'
      };

      const actionSource = {
        a: actions.createThought(thought)
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          send: thought,
          category: 'create-thought'
        }
      };

      // Asserts that the sources, trigger the provided sinks,
      // when executing the fetchReposByUser function
      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        createThought,
        done
      );
    });
  });

  describe('forgetThought', () => {
    it('should emit HTTP requests given ACTIONs', done => {
      const actionSource = {
        a: actions.forgetThought(1)
      };

      const httpSource = {
        select: () => null
      };

      const httpSink = {
        x: {
          url: '/thoughts/1',
          method: 'DELETE',
          category: 'delete-thought'
        }
      };

      // Asserts that the sources, trigger the provided sinks,
      // when executing the fetchReposByUser function
      assertSourcesSinks(
        {
          ACTION: { 'a|': actionSource },
          HTTP: { '-|': httpSource }
        },
        {
          HTTP: { 'x|': httpSink }
        },
        forgetThought,
        done
      );
    });
  });
});
