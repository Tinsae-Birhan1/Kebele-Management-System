import AnimatedPage from "../../../../components/AnimatedPage";
import PendingTable from "../../../../components/DataTable/PendingTable";
import "./Pending.css";

export default function Pending() {
  return (
    <AnimatedPage>
      <div className="admin-screen">
        
        <PendingTable />
      </div>
    </AnimatedPage>
  );
}
