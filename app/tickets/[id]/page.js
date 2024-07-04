import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets/");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function Ticket({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <div key={ticket.id} className="card my-5">
      <h3>{ticket.title}</h3>
      <p>{ticket.body.slice(0, 200)}...</p>

      <div className={`pill ${ticket.priority}`}>
        {ticket.priority} priority
      </div>
    </div>
  );
}

export default Ticket;
