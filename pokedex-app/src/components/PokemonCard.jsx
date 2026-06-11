function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />

      <h2 className="text-xl font-bold text-center capitalize mt-2">
        {pokemon.name}
      </h2>

      <p className="text-center text-gray-500">
        #{pokemon.id}
      </p>

      <div className="flex justify-center gap-2 mt-3">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;