export const groupTickets = (tickets, key, groups) => 
    tickets.reduce((acc, ticket) => {
      const groupKey = key === "priority" ? getPriorityLabel(ticket.priority) : ticket[key] || "No group";
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(ticket);
      return acc;
    }, groups);
  
  const priorityGroups = { "No priority": [], "Low": [], "Medium": [], "High": [], "Urgent": [] };
  const statusGroups = { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] };
  
  export const groupTicketsByStatus = (tickets) => groupTickets(tickets, "status", { ...statusGroups });
  export const groupTicketsByPriority = (tickets) => groupTickets(tickets, "priority", { ...priorityGroups });
  export const groupTicketsByUserId = (tickets) => groupTickets(tickets, "userId", {});
  
  export const mapUsersByUserId = (users) =>
    users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
  
  const getPriorityLabel = (priority) => 
    ["No priority", "Low", "Medium", "High", "Urgent"][priority] || "NA";
  
  const orderTickets = (tickets, orderKey) => 
    tickets.sort((a, b) => orderKey === "priority" ? b.priority - a.priority : a.title.localeCompare(b.title));
  
  export const loadGrid = (tickets, grouping, ordering) => {
    const orderedTickets = orderTickets([...tickets], ordering);
    switch (grouping) {
      case "status": return groupTicketsByStatus(orderedTickets);
      case "priority": return groupTicketsByPriority(orderedTickets);
      case "user": return groupTicketsByUserId(orderedTickets);
      default: return groupTicketsByUserId(orderedTickets);
    }
  };
  