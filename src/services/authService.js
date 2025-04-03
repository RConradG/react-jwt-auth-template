const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    const res = await fetch (`${BASE_URL}/sign-up`, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error);
    }

    if (data.token) {
      localStorage.setItem('token', data.token);
      return JSON.parse(atob(data.token.split('.')[1])).payload;
    }

  } catch (error) {
      console.error(error);
  }
};

export {signUp};