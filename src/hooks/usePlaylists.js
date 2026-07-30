// src/hooks/usePlaylists.js
import { useState, useEffect, useCallback } from 'react'
import {
  getPlaylists,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
} from '../services/api/playlistApi'

/**
 * Custom hook untuk mengelola data playlist lewat API (mockapi.io).
 * Membungkus semua state (data, loading, error) dan fungsi
 * Create / Update / Delete di satu tempat, supaya komponen
 * (HomePage) tinggal pakai tanpa perlu tahu detail axios-nya.
 */
export function usePlaylists() {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPlaylists = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getPlaylists()
      setPlaylists(data)
    } catch (err) {
      setError('Gagal memuat data playlist. Cek koneksi atau URL API.')
    } finally {
      setLoading(false)
    }
  }, [])

  // ambil data pertama kali komponen tampil
  useEffect(() => {
    fetchPlaylists()
  }, [fetchPlaylists])

  async function createPlaylist(playlist) {
    const created = await addPlaylist(playlist)
    setPlaylists((prev) => [...prev, created])
  }

  async function editPlaylist(id, playlist) {
    const updated = await updatePlaylist(id, playlist)
    setPlaylists((prev) => prev.map((p) => (p.id === id ? updated : p)))
  }

  async function removePlaylist(id) {
    await deletePlaylist(id)
    setPlaylists((prev) => prev.filter((p) => p.id !== id))
  }

  return {
    playlists,
    loading,
    error,
    createPlaylist,
    editPlaylist,
    removePlaylist,
    refetch: fetchPlaylists,
  }
}
