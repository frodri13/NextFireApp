import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Loader show />
      <button onClick={() => toast.success('Hello Toast!')}>
        Toast Me!
      </button>
    </div>
  )
}
