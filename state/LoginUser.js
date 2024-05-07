
const loginUser = async () => {
  try {
    if (name.length === 0) {
      alert("Username harus diisi");
      return;
    }
    if (password.length === 0) {
      alert("Password harus diisi");
      return;
    }

    // setBtnLoading(true);
 
    const response = await axios.post(`http://152.42.224.77/auth/login`, {
      username: name,
      password: password,
    }
    );

    if (response.data) {
      navigation.navigate("MainJurnal");
      console.log(response.data);
      // setCredentialsStore(response.data);
      // storage.set("credentials", JSON.stringify(response.data));  
      // setBtnLoading(false);
    } else {
      alert("Authentication failed: " + response.data.message);
    }
  } catch (error) {
    alert("An error occurred: " + error.message);
  } finally {
    // setBtnLoading(false);
  }
}

export default loginUser;