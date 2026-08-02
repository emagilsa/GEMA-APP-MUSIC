// src/store/redux/playlistSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getPlaylists,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
} from '../../services/api/playlistApi'

/**
 * Async thunks — masing-masing memanggil fungsi Get/Add/Edit/Delete
 * dari folder services/api, sesuai instruksi Step 4.
 */
export const fetchPlaylists = createAsyncThunk(
  'playlists/fetchPlaylists',
  async (_, { rejectWithValue }) => {
    try {
      return await getPlaylists()
    } catch (err) {
      return rejectWithValue('Gagal memuat data playlist. Cek koneksi atau URL API.')
    }
  }
)

export const createPlaylist = createAsyncThunk(
  'playlists/createPlaylist',
  async (playlist, { rejectWithValue }) => {
    try {
      return await addPlaylist(playlist)
    } catch (err) {
      return rejectWithValue('Gagal menyimpan ke server. Coba lagi.')
    }
  }
)

export const editPlaylist = createAsyncThunk(
  'playlists/editPlaylist',
  async ({ id, playlist }, { rejectWithValue }) => {
    try {
      return await updatePlaylist(id, playlist)
    } catch (err) {
      return rejectWithValue('Gagal menyimpan ke server. Coba lagi.')
    }
  }
)

export const removePlaylist = createAsyncThunk(
  'playlists/removePlaylist',
  async (id, { rejectWithValue }) => {
    try {
      await deletePlaylist(id)
      return id
    } catch (err) {
      return rejectWithValue('Gagal menghapus di server. Coba lagi.')
    }
  }
)

// Initial State — array kosong, nanti diisi data API (Step 3)
const initialState = {
  items: [],
  loading: false,
  error: null,
}

const playlistSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  // Reducer untuk data API — menangani hasil dari tiap thunk
  // dan menyimpannya ke state global.
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchPlaylists.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // ADD
      .addCase(createPlaylist.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(createPlaylist.rejected, (state, action) => {
        state.error = action.payload
      })
      // EDIT
      .addCase(editPlaylist.fulfilled, (state, action) => {
        const idx = state.items.findIndex((p) => p.id === action.payload.id)
        if (idx !== -1) state.items[idx] = action.payload
      })
      .addCase(editPlaylist.rejected, (state, action) => {
        state.error = action.payload
      })
      // DELETE
      .addCase(removePlaylist.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload)
      })
      .addCase(removePlaylist.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export default playlistSlice.reducer
