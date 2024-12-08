import { NavLink } from "react-router-dom";
import { Button, Drawer, Grid, Menu, MenuProps, Typography } from "antd";
import { FaHome, FaClipboardList, FaCar, FaHotel, FaGrinStars, FaUser, FaBars, FaTable } from "react-icons/fa";
import React, { useState } from "react";

const { Title } = Typography;
const { useBreakpoint } = Grid
type MenuItem = Required<MenuProps>['items'][number];

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { name: "Home", route: "/", icon: <FaHome /> },
        { name: "Dashboard", route: "/dashboard", icon: <FaTable /> },
        { name: "Program", route: "/program", icon: <FaClipboardList /> },
        { name: "Travel", route: "/travel", icon: <FaCar /> },
        { name: "Accommondation", route: "/accommondation", icon: <FaHotel /> },
        { name: "RestaurantsAndActivities", route: "/restaurants&activities", icon: <FaGrinStars /> },
        { name: "ContactUs", route: "/contact-us", icon: <FaUser /> },
    ];

    const items: MenuItem[] = navLinks.map((link) => ({
        label: <NavLink to={link.route}>{link.name}</NavLink>,
        key: link.route,
        icon: link.icon
    }));

    const screens = useBreakpoint();

    return (
        <nav
        style={{
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            position: "relative",
        }}
    >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Title level={4} style={{ margin: 0 }}>
                Menorca
            </Title>
            {!screens.lg && (
                <FaBars
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={toggleMenu}
                />
            )}
        </div>
        {screens.lg ? (
            <Menu
                mode="horizontal"
                theme="light"
                defaultSelectedKeys={["/"]}
                items={items}
                style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" }}
            />
        ) : (
            <Drawer
                title="Menu"
                placement="right"
                closable
                onClose={toggleMenu}
                open={menuOpen}
            >
                {navLinks.map((link) => (
                    <Button
                        key={link.route}
                        href={link.route}
                        type="link"
                        icon={link.icon}
                        style={{ display: "block", textAlign: "left", padding: "10px 20px" }}
                    >
                        {link.name}
                    </Button>
                ))}
            </Drawer>
        )}
    </nav>
    )
}
