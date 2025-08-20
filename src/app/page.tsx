'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TabNewsPost {
  id: string;
  owner_username: string;
  slug: string;
  title: string;
  body: string | null;
  published_at: string;
}

async function getTabNewsPosts(): Promise<TabNewsPost[]> {
  const url = 'https://www.tabnews.com.br/api/v1/contents?per_page=100';
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Falha ao buscar os posts do TabNews.');
  }

  const data = await response.json();
  return data;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<TabNewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTabNewsPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    const lowerTitle = (post.title || '').toLowerCase();
    const lowerBody = (post.body || '').toLowerCase();

    return lowerTitle.includes(lowerSearchTerm) || lowerBody.includes(lowerSearchTerm);
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center tracking-tight">
          Next.js Newsletter
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Busque posts sobre qualquer assunto no TabNews.
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar por termo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
          />
        </div>
        
        {loading ? (
          <p className="text-center text-gray-500">Carregando posts...</p>
        ) : filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum post encontrado.</p>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Link href={`https://www.tabnews.com.br/${post.owner_username}/${post.slug}`} target="_blank">
                  <h2 className="text-xl font-bold text-gray-800 hover:text-cyan-500 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mt-1">
                  Por {post.owner_username} • Publicado em {new Date(post.published_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}