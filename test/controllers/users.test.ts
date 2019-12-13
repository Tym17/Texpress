import { getUsersListing } from '../../src/controllers/users';

const mockResponse = () => {
    const res: any = {};
    res.send = jest.fn().mockReturnValue(res);
    return res;
}

const mockRequest = () => {
    return {};
};

it('Tests  \'usersController:getUsersListing\'', () => {
    const req: any = mockRequest();
    const res: any = mockResponse();

    getUsersListing(req, res);

    expect(res.send).toHaveBeenCalledWith('respond with a resource');
});

