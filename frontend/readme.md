# react application work flow

- index.html -> main.tsx -> App.tsx

# setup tab color

```
"workbench.colorCustomizations": {
    "tab.activeBorder": "#00ff44",
    "tab.unfocusedActiveBorder": "#16ac08"
  }
```

```
  <Routes>
                      {/* Protected routes */}
                      <Route
                        path="/"
                        element={
                          <ProtectedRoutes
                            isAuthented={authReducer.isAuthented}
                          />
                        }
                      >
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/stock" element={<StockPage />} />
                        <Route path="/report" element={<ReportPage />} />
                        <Route
                          path="/stock/create"
                          element={<StockCreatePage />}
                        />
                        <Route
                          path="/stock/edit/:id"
                          element={<StockEditPage />}
                        />
                        <Route path="/report" element={<ReportPage />} />
                        <Route
                          path="/transaction"
                          element={<TransactionPage />}
                        />
                        {/* <Route path="/chartjs" element={<ChartJSFaker />} /> */}
                        <Route path="/" element={<Navigate to="/report" />} />
                      </Route>

                      {/** Wrap all Route under PublicRoutes element */}
                      <Route
                        path="/"
                        element={
                          <PublicRoutes isAuthented={authReducer.isAuthented} />
                        }
                      >
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                      </Route>
                    </Routes>
```
