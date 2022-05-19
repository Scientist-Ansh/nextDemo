const url =
  'https://api-ap-south-1.graphcms.com/v2/cl345ey6659be01xsb4203304/master';

const getProjectsQuery = `
query MyQuery {
  projects {
    id
    name
    shortDescription
    description {
      html
      text
    }
    image {
      url
    }
  }
}
`;

export const getProjects = () => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: getProjectsQuery,
    }),
  }).then((res) => res.json());
};

const getHomePageQuery = `
query MyQuery {
  homePages {
    id
    logo
    heading
    description {
      html
      text
    }
    image {
      url
    }
  }
}`;

export const getHomePage = () => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: getHomePageQuery,
    }),
  }).then((res) => res.json());
};
