
# Padronização de Importação de Componentes

Para manter a organização e a consistência visual dos nossos arquivos, adotamos a seguinte ordem de prioridade para os imports.

---

## 🔝 Ordem de Importação

1.  **Style**: Arquivos de estilização (CSS, SCSS, Styled Components).
2.  **Código/Arquivos**: Lógica, Hooks, Funções utilitárias, Services, Contextos e Tipagens.
3.  **Componentes**: Importação de outros componentes de interface.
4.  **Ícones/Imagens/Vídeos**: Ativos estáticos e recursos multimídia.

---

## 🛠️ Exemplo de Aplicação

```javascript
// 1. Style
import { StyledButton, Wrapper } from './styles';
import './layout.css';

// 2. Código/Arquivos
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { api } from '@/services/api';
import { formatCurrency } from '@/utils/masks';

// 3. Componentes
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { Modal } from '@/components/Modal';

// 4. Ícones/Imagens/Vídeos
import { FiSettings, FiUser } from 'react-icons/fi';
import BannerImg from '@/assets/banner.png';
import IntroVideo from '@/assets/intro.mp4';
```