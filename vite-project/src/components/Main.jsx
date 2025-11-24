export default function Main() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Moje Projekty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Zbiór projektów stworzonych w ramach kursu
          </p>
          <a 
            href="https://github.com/szymon-tulodziecki" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Mój GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <a 
            href="https://szymon-tulodziecki.github.io/jezyki_wysokiego_poziomu/lab4prod/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Lab 4
              </h3>
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Wykonanie laboratorium nr 4
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                JavaScript
              </span>
            </div>
          </a>

          <a 
            href="https://szymon-tulodziecki.github.io/jezyki_wysokiego_poziomu/lab5prod/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Lab 5
              </h3>
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Wykonanie laboratorium nr 5
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                JavaScript
              </span>
            </div>
          </a>

          <a 
            href="https://szymon-tulodziecki.github.io/jezyki_wysokiego_poziomu/lab6prod/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Lab 6
              </h3>
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Wykonanie laboratorium nr 6
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                JavaScript
              </span>
            </div>
          </a>

          <a 
            href="https://nextjslab7.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Lab 7
              </h3>
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Wykonanie laboratorium nr 7
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                React
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
