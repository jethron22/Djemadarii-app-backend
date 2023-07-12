

const createError = ( status , message) => {

    const err = new Error();

    err.status = status;

    message = message ;

    return err
}

export default createError;