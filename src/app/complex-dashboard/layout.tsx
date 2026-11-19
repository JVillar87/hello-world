export default function ComplexDashboardLayout(props: LayoutProps<"/complex-dashboard">) {
    const {
        children,
        users,
        revenue,
        notifications,
    } = props as LayoutProps<"/complex-dashboard"> & {
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    };
    return (
        <>
         <div>{children}</div> 
         <div style = {{ display: "flex"}}>
            <div style = {{display: "flex", flexDirection: "column"}}>
         {users} 
         {revenue} 
            </div>

        <div style = {{ display: "flex", flex: 1}}>
        {notifications}</div>
        </div>
        </>
    );
}