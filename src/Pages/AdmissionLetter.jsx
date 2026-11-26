export default function AdmissionLetter() {
  return (
    <section className="w-full bg-white p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="/" className="text-sm text-gray-500">
            ← All documents
          </a>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Admission Letter
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            admission-letter.jpg
          </p>
        </div>

        <a
          href="/src/assets/admission-letter.jpg"
          download="admission-letter.jpg"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md"
        >
          ↓ Download
        </a>
      </div>

      <img
        src="/src/assets/admission-letter.jpg"
        alt="Admission letter"
        className="mt-8 max-w-full rounded-lg"
      />
    </section>
  );
}