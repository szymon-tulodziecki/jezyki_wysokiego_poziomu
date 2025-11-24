export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Meal Details Page</h1>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Viewing meal: {params.mealSlug}
      </p>
    </main>
  );
}
