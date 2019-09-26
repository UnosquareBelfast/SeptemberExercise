import instance from '../src/utilities/Axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

describe('Order_Service', () => {
  it('SaveOrder called with order test details, correctly submits', () => {
    const orderTestDetails = {
      testProperty: '123',
    };
    const successCode = 200;

    mock
      .onPost('/orders', orderTestDetails)
      .reply(successCode);

    saveOrderDetails(orderTestDetails).then(res => {
      expect(res.status).toEqual(successCode);
    }).catch(() => {});
  });
});
