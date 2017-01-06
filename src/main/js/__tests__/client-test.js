import client from '../client';
import fetchMock from 'jest-fetch-mock';

//noinspection JSAnnotator
global.fetch = fetchMock;

describe('client', () => {
    it('calls fetch to get a resource', () => {
        global.fetch.mockResponse(JSON.stringify({_embedded:{stuff:{}}}));

        client.getResource('stuff');

        expect(global.fetch).toBeCalledWith('/api/stuff', {});
    });

    it('calls fetch to create a resource', () => {
        global.fetch.mockResponse(JSON.stringify({}));

        client.newResource('stuff', {body: JSON.stringify({text: 'awesome stuff'})});

        expect(global.fetch).toBeCalledWith('/api/stuff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: 'awesome stuff'})
        });
    });
});