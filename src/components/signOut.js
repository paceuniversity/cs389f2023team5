import supabase from "../db/supa";
export const signOut = async () => {
    const {error} = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    } else {
      console.log("Signed out");
      window.location.href = "/"
    }
  };
