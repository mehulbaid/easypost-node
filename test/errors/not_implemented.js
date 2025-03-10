import NotImplementedError, { createMessage, NAME, STATUS } from '../../src/errors/not_implemented';

describe('NotImplemented', () => {
  const method = 'GET';
  const endpoint = 'addresses';

  it('generates a helpful error message', () => {
    expect(new NotImplementedError(method, endpoint).message).to.equal(
      createMessage(method, endpoint),
    );
  });

  it('provides a status code', () => {
    expect(new NotImplementedError(method, endpoint).status).to.equal(STATUS);
    expect(new NotImplementedError(method, endpoint).status).to.exist;
  });

  it('has a name', () => {
    expect(new NotImplementedError(method, endpoint).name).to.equal(NAME);
    expect(new NotImplementedError(method, endpoint).name).to.exist;
  });
});
