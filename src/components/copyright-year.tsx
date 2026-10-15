/** Current year, computed once and cached (Cache Components requires dates to be cached or dynamic). */
export async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
