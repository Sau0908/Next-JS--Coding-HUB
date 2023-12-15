import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "@/Firebase";
//  initial state
const auth = getAuth(app);
interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean; 
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false, 
};


interface LoginPayload {
  email: string;
  password: string;
}

export const loginAsync = createAsyncThunk<User, LoginPayload>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

interface SignUpPayload {
  email: string;
  password: string;
}

export const signUpAsync = createAsyncThunk<User, SignUpPayload>(
  "auth/signup",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const logoutAsync = createAsyncThunk<void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signInWithGoogleAsync = createAsyncThunk<User>(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//  auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true; 
      })
      .addCase(signInWithGoogleAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string; 
      });
  },
});

export default authSlice.reducer;
