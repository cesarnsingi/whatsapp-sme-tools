import Container from "./Layout/Container";

export default function Footer() {
  return (
    <footer className="bg-soft py-10">
      <Container>
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cerins — Built in Angola
        </div>
      </Container>
    </footer>
  );
}
