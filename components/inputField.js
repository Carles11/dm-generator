export const basicInput = () => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-dark text-xs font-secondary mb-2"
        htmlFor="firstName"
      >
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-dark border border-dark rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
        type="text"
        id="firstName"
        name="firstName"
        required
        placeholder="Jane"
      />
    </div>
  )
}
