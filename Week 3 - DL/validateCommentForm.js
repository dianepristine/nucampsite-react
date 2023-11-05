export const validateCommentForm = (values) => {
    const errors = {};

    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be less than 15 characters.';
    }

    if (!values.rating) {
        errors.rating = 'Required';
    }

    return errors;
};



