import "isomorphic-fetch";

const fetchDrones = async id => {
  // Using the create-react-app's proxy for CORS issues
  const response = await fetch(
    `https://react-assessment-api.herokuapp.com/api/drone`
  );
  if (!response.ok) { //sends error, picked up by toast
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};

export default fetchDrones;
