import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
    IconButton
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLongOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// Narrower width for compact desktop feel
const SIDEBAR_WIDTH = 240;

const menuStructure = [
    {
        category: 'MAIN MENU',
        items: [
            { id: 'dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
            { id: 'orders', text: 'Order Management', icon: <ShoppingCartIcon /> },
            { id: 'customers', text: 'Customers', icon: <PeopleIcon /> },
            { id: 'coupons', text: 'Coupon Code', icon: <ConfirmationNumberIcon /> },
            { id: 'categories', text: 'Categories', icon: <CategoryIcon /> },
            { id: 'transactions', text: 'Transaction', icon: <ReceiptLongIcon /> },
            { id: 'brand', text: 'Brand', icon: <StarBorderIcon /> },
        ]
    },
    {
        category: 'PRODUCTS',
        items: [
            { id: 'add-product', text: 'Add Products', icon: <InventoryIcon /> },
            { id: 'product-list', text: 'Product List', icon: <InventoryIcon /> },
        ]
    },
    {
        category: 'ADMIN',
        items: [
            { id: 'manage-admins', text: 'Manage Admins', icon: <AccountCircleIcon /> },
            { id: 'admin-roles', text: 'Admin Roles', icon: <SettingsIcon /> },
        ]
    }
];

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('orders');

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: SIDEBAR_WIDTH,
                    boxSizing: 'border-box',
                    borderRight: '1px solid #F1F1F4',
                    px: 1.5, // Reduced outer horizontal padding
                    py: 2,   // Reduced outer vertical padding
                    backgroundColor: '#FFFFFF',
                },
            }}
        >
            {/* Header Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5, px: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        sx={{
                            width: 28,  // Shrunk from 36px
                            height: 28, // Shrunk from 36px
                            backgroundColor: '#1A62FF',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '15px'
                        }}
                    >
                        e
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', lineHeight: 1 }}>
                        evaly
                    </Typography>
                </Box>
                <IconButton size="small" sx={{ color: '#A1A1AA', p: 0.5 }}>
                    <MenuOpenIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            {/* Navigation Groups */}
            {menuStructure.map((group) => (
                <Box key={group.category} sx={{ mb: 2 }}>
                    <Typography
                        variant="caption"
                        sx={{
                            px: 1,
                            fontWeight: 600,
                            color: '#A1A1AA',
                            letterSpacing: '0.3px',
                            display: 'block',
                            mb: 0.5,
                            fontSize: '11px' // Tiny, clean desktop subtitle
                        }}
                    >
                        {group.category}
                    </Typography>

                    <List sx={{ p: 0 }} dense> {/* Enforced MUI built-in dense list mode */}
                        {group.items.map((item) => {
                            const isSelected = activeItem === item.id;
                            return (
                                <ListItem key={item.id} disablePadding sx={{ mb: 0.25 }}>
                                    <ListItemButton
                                        onClick={() => setActiveItem(item.id)}
                                        selected={isSelected}
                                    // sx={{
                                    //     borderRadius: '6px',
                                    //     py: 0.6, // Tighter vertical padding for desktop
                                    //     px: 1,   // Compact horizontal padding
                                    //     minHeight: '32px', // Standard desktop row limit
                                    //     backgroundColor: 'transparent',
                                    //     '&.Mui-selected': {
                                    //         backgroundColor: '#F4F4F5',
                                    //         color: '#18181B',
                                    //         '& .MuiListItemIcon-root': { color: '#18181B' },
                                    //         '& .MuiListItemText-primary': { fontWeight: 600 },
                                    //         '&:hover': { backgroundColor: '#E4E4E7' }
                                    //     },
                                    //     '&:hover': {
                                    //         backgroundColor: '#FAFAFA',
                                    //         '& .MuiListItemIcon-root': { color: '#3F3F46' }
                                    //     }
                                    // }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 28, // Shrunk from 36px to bring text closer to icon
                                                color: isSelected ? '#18181B' : '#A1A1AA',
                                                '& svg': { fontSize: '18px' } // Hard desktop cap on icon sizing
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            sx={{
                                                fontSize: '13px', // Standard desktop text sizes (13px/14px)
                                                fontWeight: isSelected ? 600 : 500,
                                                color: isSelected ? '#18181B' : '#71717A',
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            ))}
        </Drawer>
    );
}