import {card, gradientCard, type CardProps as CardVariantsProps, type GradientCardProps} from '@tailus/themer';

interface InnerProps extends React.HTMLAttributes<HTMLDivElement>, GradientCardProps {}

const InnerCard: React.FC<InnerProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const { inner } = gradientCard({ variant });
  return (
        <div className={inner({className})} {...props}>
          {children}
        </div>
      )
  }


export interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement>, CardVariantsProps {
  gradient?: boolean;
  href?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  children,
  gradient,
  href,
  ...props
}) => {
  const Component = href ? "a" : "div";
  const { outer } = gradientCard({ variant });
  return (
    <>
      {gradient && (variant == "elevated" || variant == "soft" ) ? (
        <Component className={outer({className})} href={href} {...props}>
            <InnerCard variant={variant}>
                {children}
            </InnerCard>
        </Component>
        
      ) : (
        <Component className={card({variant, className})} href={href} {...props}>
          {children}
        </Component>
      )}
    </>
  );
};