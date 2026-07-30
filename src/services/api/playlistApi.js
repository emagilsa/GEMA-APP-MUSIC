// src/services/api/playlistApi.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

/**
 * GET — ambil semua playlist
 */
export async function getPlaylists() {
  const res = await axios.get(API_URL)
  return res.data
}

/**
 * ADD (POST) — tambah playlist baru
 */
export async function addPlaylist(playlist) {
  const res = await axios.post(API_URL, playlist)
  return res.data
}

/**
 * UPDATE (PUT) — ubah playlist yang sudah ada berdasarkan id
 */
export async function updatePlaylist(id, playlist) {
  const res = await axios.put(`${API_URL}/${id}`, playlist)
  return res.data
}

/**
 * DELETE — hapus playlist berdasarkan id
 */
export async function deletePlaylist(id) {
  await axios.delete(`${API_URL}/${id}`)
}
