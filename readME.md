# Concesionaria
Proyecto de práctica de TypeScript para aplicar conceptos de programación orientada a objetos como herencia, composición, encapsulamiento y agregación.

## Estructura
```
src/
├── motor.ts
├── vehiculo.ts
├── autonafta.ts
├── autoelectrico.ts
├── vendedor.ts
├── concesionaria.ts
├── pago.ts
├── pagoContado.ts
├── pagoFinanciado.ts
├── planDeCuotas.ts
├── venta.ts
└── index.ts

test/
├── vehiculo.test.ts
├── vendedor.test.ts
├── concesionaria.test.ts
└── pago.test.ts
```

## Conceptos aplicados

- **Herencia**: Autonafta y Autoelectrico extienden Vehiculo. PagoContado y PagoFinanciado extienden Pago.
- **Composición**: Vehiculo contiene un Motor. PagoFinanciado contiene un PlanDeCuotas.
- **Encapsulamiento**: Precio y kilometraje privados con validaciones.
- **Encapsulamiento doble**: Concesionaria no expone su stock ni ventas directamente.
- **Agregación**: Vendedor referencia vehículos que existen independientemente.

## Instalación
```bash
npm install
```

## Correr los tests
```bash
npm test
```

## Correr el proyecto
```bash
npm start
```

## CI

Los tests corren automáticamente en cada push a main usando GitHub Actions.