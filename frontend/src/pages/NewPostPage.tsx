import { useState } from 'react'
import { tags, technologies } from './DummyData/tagsAndTech'

export default function NewPostPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handleTechChange = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
      <div className="container mx-auto p-4 text-white">
        <div className="mx-auto max-w-2xl rounded-lg border border-gray-800 bg-nav-bar-color p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium">
                Title:
              </label>
              <input
                id="title"
                type="text"
                required
                className="w-full rounded-md border border-gray-800 bg-nav-bar-color px-3 py-2 text-sm focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium">
                Description:
              </label>
              <textarea
                id="description"
                required
                className="min-h-[150px] w-full rounded-md border border-gray-800 bg-nav-bar-color px-3 py-2 text-sm focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Tags:
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {tags.map((tag) => (
                  <label
                    key={tag}
                    className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-800 bg-nav-bar-color px-3 py-2 text-sm hover:bg-[#333333]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="rounded border-gray-700 bg-gray-900 text-gray-400"
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Technologies:
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {technologies.map((tech) => (
                  <label
                    key={tech}
                    className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-800 bg-nav-bar-color px-3 py-2 text-sm hover:bg-[#333333]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTech.includes(tech)}
                      onChange={() => handleTechChange(tech)}
                      className="rounded border-gray-700 bg-gray-900 text-gray-400"
                    />
                    <span>{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
  )
}

