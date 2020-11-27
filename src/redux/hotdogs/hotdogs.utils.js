export const fetchHotdogs = async () => {
  const response = await fetch('http://localhost:3003/api/hotdogs').then((response) =>
    response.json(),
  );
  return response;
};
