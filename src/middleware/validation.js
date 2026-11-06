export const validate = (schema) => {
  return (req, res, next) => {
    const sources = ["body", "params", "query"];
    const errors = [];

    for (const src of sources) {
      if (schema[src]) {
        const { error } = schema[src].validate(req[src], { abortEarly: false });
        if (error) {
          errors.push(...error.details.map((d) => d.message));
        }
      }
    }

    if (errors.length) {
      return res.status(400).json({ message: "Validation error", errors });
    }
    next();
  };
};
