import {
    Container,
    Paper,
    Stack,
    Typography,
    TextField,
    Button,
    Box,
    InputAdornment,
    IconButton,
    Alert,
    Switch
} from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff, Email } from '@mui/icons-material';
import { useState } from 'react';
import { Form, useActionData, useNavigation, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../utils/theme/themeContextProvider';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const themeContext = useThemeContext();
    const actionData = useActionData(); // Catches server-side or validation errors from the action
    const navigation = useNavigation();
    const location = useLocation();

    const isSubmitting = navigation.state === "submitting";
    const from = location.state?.from?.pathname || '/dashboard';

    return (


        // 1. Center everything perfectly on the page using Flexbox on a Container
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Switch
                checked={themeContext.mode === 'dark'}
                onChange={themeContext.toggleColorMode}
            // inputProps={{ 'aria-label': 'toggle theme mode' }}
            />
            {/* 2. Structured Paper Card to hold the UI */}
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                    width: '100%',
                    borderRadius: 3,
                    backgroundColor: 'background.paper'
                }}
            >
                {/* 3. Stack automatically structures and centers internal components with clean spacing */}
                <Stack spacing={3}>

                    {/* App Branding Header */}
                    <Box
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            p: 1.5,
                            borderRadius: '50%'
                        }}
                    >
                        <LockOutlined fontSize="medium" />
                    </Box>

                    <Stack spacing={0.5} >
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Welcome Back
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sign in to manage your account
                        </Typography>
                    </Stack>

                    {/* Action/Auth Errors Display */}
                    {actionData?.error && (
                        <Alert severity="error" sx={{ width: '100%' }}>
                            {actionData.error}
                        </Alert>
                    )}

                    {/* 4. React Router Native Data Form */}
                    <Box
                        component={Form}
                        method="post"
                        replace
                        sx={{ width: '100%' }}
                    >
                        {/* Hidden field to pass redirection context to the action */}
                        <input type="hidden" name="redirectTo" value={from} />

                        <Stack spacing={2.5}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email color="action" />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlined color="action" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={isSubmitting}
                                sx={{
                                    py: 1.5,
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    fontSize: '1rem'
                                }}
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </Stack>
                    </Box>

                </Stack>
            </Paper>
        </Container>
    );
}