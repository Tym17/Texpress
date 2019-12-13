import { getHomepage } from '../../src/controllers/index';

const mockResponse = () => {
    const res: any = {};
    res.render = jest.fn().mockReturnValue(res);
    return res;
}

const mockRequest = () => {
    return {};
};

it('Tests  \'indexController:getHomepage\'', () => {
    const req: any = mockRequest();
    const res: any = mockResponse();

    getHomepage(req, res);

    expect(res.render).toHaveBeenCalled();
});

